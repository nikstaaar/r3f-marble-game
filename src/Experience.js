import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js'
import Level from './Level.js'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />
        <Level/>
        <Lights />

       
    </>
}