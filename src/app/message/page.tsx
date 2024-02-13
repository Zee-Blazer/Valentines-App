
export default function Message() {

    return (
        <>
            <div
                className="bg-cover bg-center mt-12 mx-4 rotate-1 rounded-sm"
                style={{
                    backgroundImage: `url("../../../Images/pink.jpg")`,
                    minHeight: "200px",
                }}
            >
                <div className=" px-5 py-12 h-fit"
                    style={{ minHeight: "200px", backgroundColor: "rgba(245, 39, 145, 0.59)", color: "black" }}
                >
                    <p className="mb-4 caveat text-3xl">Dear Friend,</p>

                    <p className="caveat text-2xl">
                    Something new
                    </p>

                    <p className="caveat text-3xl text-right mt-6">
                        <p>Much Love</p>
                        Daniel
                    </p>

                </div>

            </div>

            <p className="text-center py-3 roboto" style={{ color: "lightblue" }}>Send Message</p>
        </>
    )
}
