function Video() {
    return (
        <div>
            <div className="w-full h-screen flex justify-between px-10 ">
                <div className="h-[80%] w-[24%] bg-black rounded-xl overflow-hidden">
                    <div className="w-full h-full object-cover">
                        <video autoPlay={true} src="./file1.mkv" loop muted></video>
                    </div>
                </div>
                <div className="h-[80%] w-[24%] bg-black rounded-xl overflow-hidden">
                  <div className="w-full h-full object-cover">
                    <video autoPlay={true} src="./file2.mkv" loop muted className="size-96 scale-150 my-16"></video>
                  </div>
                </div>
                <div className="h-[80%] w-[24%] bg-black rounded-xl overflow-hidden">
                  <div className="w-full h-full object-cover">
                    <video autoPlay={true} src="./file3.mkv" loop muted></video>
                  </div>
                </div>
                <div className="h-[80%] w-[24%] bg-black rounded-xl overflow-hidden">
                  <div className="w-full h-full object-cover">
                    <video autoPlay={true} src="./file4.mkv" loop muted></video>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Video;

