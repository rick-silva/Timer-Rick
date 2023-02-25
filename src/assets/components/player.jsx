
export const Player = () =>{

    let music = document.querySelector("audio")

    const playMusic = () =>{
        music.play()
        console.log("Tocar musica...")
    }

    return(
        <div className="w-96 absolute bottom-10">
            <audio controls src="src/assets/music/GTA5_Message.mp3"></audio>
        </div>
    )
}