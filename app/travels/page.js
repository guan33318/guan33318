import dynamic from 'next/dynamic'

// Dynamically import WorldMap to prevent SSR build issues
const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
})

export default function Travels() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Travels
      </h1>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        My personal journey to explore the world.
      </p>
      <div className="mt-8">
        <WorldMap />
      </div>
    </div>
  )
}