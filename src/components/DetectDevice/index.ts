import dynamic from 'next/dynamic'

const DetectDevice = dynamic(() => import('./DetectDevice'), { ssr: false })

export default DetectDevice