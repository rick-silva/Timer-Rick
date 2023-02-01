
export const Player = () =>{

    let music = document.querySelector("audio")

    const playMusic = () =>{
        music.play()
        console.log("Tocar musica...")
    }

    return(
        <div className="w-96 absolute bottom-10">
            {/* <iframe width="260" height="115" 
                src="https://www.youtube-nocookie.com/embed/BEXL80LS0-I?controls=0&autoplay=1&loop=1" 
                title="YouTube video player"
                allowfullscreen>

            </iframe> */}
        </div>
    )
}