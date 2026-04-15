# Checklist Modular: Depuración Errores de Compilación Next.js
> Versión 1.0 | Auditado para equipos de desarrollo | Aplicable Next.js 13+/App Router

---

## 🧩 Estructura del Checklist
Cada módulo es independiente, ejecutable en orden y auditables. Incluye comandos listos para copiar.

---

## 🔹 Módulo 1: Diagnóstico Inicial (Primeros 5 minutos)
✅ **Paso 1.1: Ejecutar build limpio sin caché**
```bash
# Elimina caché y genera build de producción
rm -rf .next node_modules/.cache && pnpm run build
```
> ❗ Importante: No usar `next dev` para diagnosticar errores de compilación. Solo `next build` muestra todos los errores de tipos y compilación.

✅ **Paso 1.2: Validar solo tipos sin build**
```bash
# Verifica errores TypeScript sin compilar assets
pnpm exec tsc --noEmit --incremental false
```

✅ **Paso 1.3: Validar configuración Next.js**
```bash
pnpm exec next info
```

✅ **Paso 1.4: Habilitar salida detallada de errores**
```bash
# Build con logs detallados
NEXT_PRIVATE_DEBUG=1 pnpm run build
```

---

## 🔹 Módulo 2: Errores de Tipos TypeScript (80% de los casos)
✅ **Paso 2.1: Ubicar la línea exacta del error**
> Regla: El error siempre está en la línea que indica el compilador, nunca antes.
> Ejemplo error detectado en este proyecto:
> ```
> ./app/servicios/page.tsx:98:14
> Type error: Type 'number[]' is not assignable to type 'Easing'.
> ```

✅ **Paso 2.2: Verificar importaciones y tipos**
```bash
# Busca tipos incompatibles en el proyecto
pnpm exec tsc --noEmit --skipLibCheck false
```

✅ **Paso 2.3: Desactivar temporalmente strict mode (solo para diagnóstico)**
Modifica temporalmente `tsconfig.json`:
```json
"strict": false,
"strictNullChecks": false
```
> ✅ Si el build pasa: El error es un problema de tipos estrictos.
> ❌ Si sigue fallando: El error es sintáctico o estructural.

✅ **Paso 2.4: Verificar librerías externas**
Comprobación común para Framer Motion, Radix, etc:
```typescript
// ❌ Incorrecto (causante del error actual):
ease: [0.16, 1, 0.3, 1]

// ✅ Correcto:
import { easeOut } from "framer-motion"
ease: easeOut
// O como string:
ease: [0.16, 1, 0.3, 1] as const
```

---

## 🔹 Módulo 3: Alias de Rutas tsconfig.json
> Errores más comunes y silenciosos

✅ **Paso 3.1: Verificar sintaxis exacta de paths**
✅ Configuración correcta (tu proyecto):
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

❌ Errores frecuentes:
1. Falta `baseUrl` declarado
2. Slash final faltante: `"@/*"` no `"@*"`
3. Paths sin el prefijo `./`
4. Mayúsculas/minúsculas: `@/Components` vs `@/components`

✅ **Paso 3.2: Validar resolución de alias**
```bash
# Comprueba que TypeScript resuelve correctamente los alias
pnpm exec tsc --showConfig | grep -A5 paths
```

✅ **Paso 3.3: Verificar plugin de Next.js**
> Obligatorio desde Next.js 13.4
```json
"plugins": [
  {
    "name": "next"
  }
]
```

✅ **Paso 3.4: Patrón de fallo común**
> Error: `Cannot find module '@/components/Navbar' or its corresponding type declarations.`
> Solución inmediata:
```bash
rm -rf .next/types && pnpm exec next telemetry disable
```

---

## 🔹 Módulo 4: App Router Específico
✅ **Paso 4.1: Verificar convenciones de nombres**
Archivos permitidos solo: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`

✅ **Paso 4.2: Validar componentes cliente/servidor**
```bash
# Busca 'use client' mal colocados
grep -r "'use client'" app/ --include="*.tsx"
```

✅ **Paso 4.3: Errores de Server Components**
> Regla: No puedes usar useState, useEffect, motion, window en componentes sin `'use client'`

---

## 🔹 Módulo 5: Limpieza y Reseteo de Entorno
✅ **Paso 5.1: Reset completo del entorno**
```bash
# Reset 100% del proyecto
rm -rf node_modules .next pnpm-lock.yaml && pnpm install
```

✅ **Paso 5.2: Verificar versiones coincidentes**
```bash
# Comprueba que todas las dependencias de Next son la misma versión
pnpm ls next react react-dom
```

✅ **Paso 5.3: Desactivar temporalmente ESLint**
En `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}
```
> ✅ Solo para diagnóstico. Nunca dejar esto en producción.

---

## 🔹 Módulo 6: Casos Especiales y Fallback
✅ **Paso 6.1: Build una página a la vez**
> Para proyectos grandes, aisla el error:
> 1. Elimina temporalmente todas las rutas excepto `/`
> 2. Ejecuta build
> 3. Ve agregando rutas una por una hasta encontrar la que falla

✅ **Paso 6.2: Desactivar caché de TypeScript**
```bash
pnpm exec tsc --noEmit --incremental false --tsBuildInfoFile /dev/null
```

✅ **Paso 6.3: Verificar actualizaciones pendientes**
```bash
pnpm outdated
```

---

## ✅ Criterios de Aceptación para Cierre
Antes de marcar el error como resuelto:
1. 🔹 `pnpm run build` se ejecuta sin errores
2. 🔹 `pnpm exec tsc --noEmit` no muestra errores
3. 🔹 `pnpm run dev` arranca correctamente
4. 🔹 No se modificó `strict: false` permanentemente
5. 🔹 No se agregaron `// @ts-ignore` sin justificación documentada

---

## 📋 Registro de Auditoría
| Fecha | Responsable | Error detectado | Módulo aplicado | Resultado |
|-------|-------------|-----------------|-----------------|-----------|
| 2026-04-15 | Build Automático | Framer Motion easing number[] → Easing | Módulo 2 | Pendiente |
| | | | | |

---

> 💡 Nota para el equipo: Este checklist se debe ejecutar completo antes de abrir un ticket de soporte o reportar un bug en Next.js. 95% de los errores de compilación se resuelven en los primeros 3 módulos.
