import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.js'
import { Level } from './Level.js'
import Player from './Player.js'

export default function Experience()
{
    return <>
        <Physics>
        <Level/>
        <Lights/>
        <Player/>
        </Physics>
    </>
}