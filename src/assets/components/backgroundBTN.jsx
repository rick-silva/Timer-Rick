
    export const BackgroundBTN = () =>{

        const backgroundIMG = (url, msg) =>{
            document.getElementById("body").style.backgroundImage = `url(${url})`
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundPosition = "center";
            document.getElementById("body").style.backgroundSize = "cover";
            console.log(`${msg}`)
        }

        return(
            <div className="w-80 h-20 flex justify-center items-center bg-opacity-70 bg-white bg-clip-padding rounded-lg absolute top-10" >

                <img className="w-24 h-12 cursor-pointer" onClick={() => {backgroundIMG("https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif", "bg1")}} src="https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif" alt=""/>

                <img className="w-24 h-12 cursor-pointer" onClick={() => {backgroundIMG("https://www.pixelstalk.net/wp-content/uploads/images6/Lofi-Wallpapers-HD-Free-download.jpg", "bg2")}} src="https://www.pixelstalk.net/wp-content/uploads/images6/Lofi-Wallpapers-HD-Free-download.jpg" alt=""/>

                <img className="w-24 h-12 cursor-pointer" onClick={() => {backgroundIMG("https://i.pinimg.com/originals/83/f6/5e/83f65e8c6efc88fabfcfbb11cf63bd8a.gif", "bg3")}} src="https://i.pinimg.com/originals/83/f6/5e/83f65e8c6efc88fabfcfbb11cf63bd8a.gif" alt=""/>

            </div>
        )
    }//fim component

