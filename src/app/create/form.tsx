
export default function FormCont () {

    return (
        <>
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

            <button
                className="bg-red-700 text-white py-2 px-4 rounded-md self-center mx-10 w-4/5"
            >Done</button>
        </>
    )
}
