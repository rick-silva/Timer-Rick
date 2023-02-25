
import Music from '/src/music/GTA5_Message.ogg'

export const Player = () =>{

    let music = document.querySelector("audio")

    const playMusic = () =>{
        music.play()
        console.log("Tocar musica...")
    }

    return(
        <div className="w-96 absolute bottom-10">
            <audio controls>
                <source src={Music} type="audio/ogg" />
            </audio>
        </div>
    )
}