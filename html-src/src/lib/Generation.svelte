
<script>
    export let Title = ""
    
    let releaseYear = "2022"
    let ageRating = "R"
    let runTime = "1h 30m"
</script>

<div class="text-white w-[100%] pt-10 pb-10 bg-[#1f1f1f] flex  justify-center relative ">
    <div class="grid grid-cols-2  relative w-[75%]" style="grid-template-columns: 60% 40%;">
        <div class="flex flex-col gap-5  self-center">
            <div class="bold text-4xl  pr-1 max-w-[100%] relative " style="word-wrap: break-word;">{Title}</div>
        
            <ul class="text-2xl text-[#bcbcbc] relative inline-flex gap-5">
                <li style="vertical-align: middle;">{releaseYear}</li>
                <li class="list-item" >{ageRating}</li>
                <li class="list-item" >{runTime}</li>
            </ul>
        </div>

        <div class="w-[100] flex-row gap-x-10 inline-flex right-0 relative justify-center self-end">
            <!-- IMDb RATING  -->
            <div class="flex flex-col relative flex-nowrap">
                <span class="text-[#bcbcbc] text-md" style="font-weight: 600;">IMDb RATING</span>
                <div class="grid place-items-center rating" style="grid-template-columns: 0.5fr auto; ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="align-middle" id="iconContext-star" viewBox="0 0 24 24" fill="gold" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                    <div class="flex flex-col ">
                        <span>
                            <span class="text-xl font-medium">8.6</span><span class="bold align-top text-lg text-[#bcbcbc] font-medium"> /10</span>
                        </span>
                        <span class="text-xl font-medium">
                            <span class="bold align-top text-sm text-[#bcbcbc] font-medium">459k</span>
                    </div>
                </div>
            </div>


            <!-- YOUR RATING -->
            <div class="flex flex-col place flex-nowrap whitespace-nowrap" >
                <span class="text-[#bcbcbc] text-md" style="font-weight: 600;">YOUR RATING</span>
                <div class="grid place-items-center rating py-1 mt-1" style="grid-template-columns: 0.5fr auto;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="" id="iconContext-star-border" viewBox="0 0 24 24" fill="#5799ef" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
                    <span class="text-2xl font-semibold text-[#5799ef]">Rate</span>
                </div>
            </div>

            <div class="flex flex-col place flex-nowrap whitespace-nowrap">
                <span class="text-[#bcbcbc] text-md  justify-self-center text-center" style="font-weight: 600;">POPULARITY</span>
                <div class="grid place-items-center rating py-1 mt-1 gap-1" style="grid-template-columns: 0.5fr auto auto;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="" id="iconContext-popularity-down" viewBox="0 0 24 24" fill="#fb3c3c" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path></svg>
                    <span class="text-2xl font-semibold text-white">40221</span>
                    <span class="flex gap-0 text-[#bcbcbc] font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" inline-flex" id="iconContext-arrow-drop-down" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>
                        <p class="inline-flex ">87</p>
                    </span>
                
                </div>
            </div>
        </div>
    </div>
    
</div>

<div class="overflow-hidden w-[100%] max-h-fit relative bg-[#1f1f1f] mx-auto ">
<section class=" pic-grid overflow-hidden w-[75%] relative  bg-[#1f1f1f] mx-auto grid place-items-center    ">
    <img src="https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            alt="kjbasd" class="relative object-contain" >

            <img src="https://cdn.wallpapersafari.com/66/81/kmY4Rg.jpg"
            alt="kjbasd" class="object-contain relative">
    <div class="Options grid place-content-center place-items-center text-white h-[100%] w-[100%]" style="font-weight: 600;">
        <div class="m-[0.5em] p-[5em] grid place-items-center Option">
            <svg style="transform: scale(1.5); margin-bottom:0.5em;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--video-library ipc-icon--inline sc-a93004d6-0 gVqJqU" id="iconContext-video-library" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path></svg>
            <p>43 VIDEOS</p>
        </div>
        <div class="m-[0.5em] p-[5em] grid place-items-center Option">
            <svg style="transform: scale(1.5); margin-bottom:0.5em;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--collections ipc-icon--inline sc-a93004d6-0 gVqJqU" id="iconContext-collections" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-10.6-3.47l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0zM2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"></path></svg>
            <p>99+ PHOTOS</p>
        </div>
    </div>
  </section>
</div>



<style>

    .pic-grid {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: auto 60% auto; 
    grid-template-rows: 1fr; 
    gap: 1em 1em; 
    grid-template-areas: 
        ". . Options";
    height: auto;
    max-height: auto;

    }
    .Options {
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "."
        "."; 
    grid-area: Options; 
    }

    .Option:hover {
        background-color: #414141;
    }



    img {
        object-fit: fill;
    }

    .rating {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 0.5rem;
    }
    
    .rating:hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .list-item::before {
    display: inline-block;
    margin: 0 0.5rem 0.2rem;
    content: "";
    font-size: 1rem;
    line-height: .5rem;
    padding: 1px;
    border-radius: 50%;
    vertical-align: middle;
    background-color: currentColor;
    transform: scale(3);
    margin-right: 1.2rem;
    }
</style>