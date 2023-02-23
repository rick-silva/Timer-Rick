
    export const BackgroundBTN = () =>{

        const backgroundIMG = (url, msg) =>{
            document.getElementById("body").style.backgroundImage = `url(${url})`
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundPosition = "center";
            document.getElementById("body").style.backgroundSize = "cover";
            console.log(`${msg}`)
        }

        const resetBackground = ()=> {
            document.getElementById("body").style.backgroundImage = `url("")`
        }

        return(
            
                <div className="w-96 h-20 flex justify-center items-center bg-opacity-70 bg-white bg-clip-padding rounded-lg absolute top-10 max-lg:w-80 max-lg:h-16 max-md:w-72 max-md:h-14" >

                    <img className="w-24 h-12 cursor-pointer max-lg:w-20 max-lg:h-11 max-md:w-16 max-md:h-10" onClick={() => {backgroundIMG("https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif", "bg1")}} src="https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif" alt=""/>

                    <img className="w-24  h-12 cursor-pointer max-lg:w-20 max-lg:h-11 max-md:w-16 max-md:h-10" onClick={() => {backgroundIMG("https://www.pixelstalk.net/wp-content/uploads/images6/Lofi-Wallpapers-HD-Free-download.jpg", "bg2")}} src="https://www.pixelstalk.net/wp-content/uploads/images6/Lofi-Wallpapers-HD-Free-download.jpg" alt=""/>

                    <img className="w-24 h-12 cursor-pointer max-lg:w-20 max-lg:h-11 max-md:w-16 max-md:h-10" onClick={() => {backgroundIMG("https://i.pinimg.com/originals/83/f6/5e/83f65e8c6efc88fabfcfbb11cf63bd8a.gif", "bg3")}} src="https://i.pinimg.com/originals/83/f6/5e/83f65e8c6efc88fabfcfbb11cf63bd8a.gif" alt=""/>
                    
                    <button className="w-16 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-14 max-lg:m-2 max-md:m-1.5" onClick={resetBackground}>Reset</button>
                </div>
            
        )
        
}//fim component

