
export default function Create() {

    return (
        <div>
            <p
                className="text-center text-2xl mt-6 pacifico mb-4"
            >Create Message</p>
            
            <div className="mx-6 mb-7">
                <label className="shadowsDesign mb-6">To:</label><br />
                <input 
                    placeholder="Fullname or Nickname" 
                    className="outline-none py-2 px-4 w-full rounded-md text-black"
                    // value={name}
                    // onChange={ e => setName(e.target.value) }
                />
            </div>

            <div className="mx-6 mb-7">
                <label className="shadowsDesign mb-6">Relationship: </label>
                <div className="flex justify-evenly">
                    <p className="py-2 px-4 rounded-md bg-red-400 bg-opacity-60 cursor-pointer">Family</p>
                    <p className="py-2 px-4 rounded-md bg-white bg-opacity-60 cursor-pointer">Friend</p>
                    <p className="py-2 px-4 rounded-md bg-white bg-opacity-60 cursor-pointer">Spouse</p>
                </div>
            </div>

            <div  className="mx-6 mb-7">
                <label className="shadowsDesign mb-6">Family: </label>
                <div className="flex justify-evenly">
                    <p className="py-2 px-4 rounded-md bg-red-400 bg-opacity-60 cursor-pointer">Parent</p>
                    <p className="py-2 px-4 rounded-md bg-white bg-opacity-60 cursor-pointer">Sibling</p>
                </div>
            </div>

            <div className="mx-6 mb-7">
                <label className="shadowsDesign mb-6">Special Memory:</label><br />
                <textarea 
                    placeholder="Quick remind of a memory you share together" 
                    className="outline-none py-2 px-4 w-full rounded-md text-black"
                    // value={name}
                    // onChange={ e => setName(e.target.value) }
                />
            </div>

            <div className="mx-6 mb-7">
                <div className="flex justify-between">
                    <label className="shadowsDesign mb-6">Message:</label>
                    <p className="bg-green-400 mb-6 px-4 py-1 rounded-sm cursor-pointer">Generate</p>
                </div>
                <textarea 
                    placeholder="Write a message..." 
                    className="outline-none py-2 px-4 w-full rounded-md text-black h-52"
                    // value={name}
                    // onChange={ e => setName(e.target.value) }
                />
            </div>

        </div>
    )
}
