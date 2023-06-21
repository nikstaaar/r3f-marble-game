import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.js'
import { Level } from './Level.js'
import Player from './Player.js'
import Effects from './Effects.js'
import useGame from './stores/useGame.js'

export default function Experience()
{
    const blocksCount= useGame((state)=> state.blocksCount)
    const blocksSeed = useGame((state)=> state.blocksSeed)

    return <>

        <color args={['#252731']} attach={"background"}/>

        <Physics>
        <Level count={ blocksCount} seed={blocksSeed}/>
        <Lights/>
        <Player/>
        </Physics>
        <Effects/>
    </>
}