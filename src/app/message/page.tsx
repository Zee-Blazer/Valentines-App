
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
                    As the world paints itself in shades of love and warmth, my thoughts are consumed by you. On this special day, I want to express the depth of my affection and gratitude for having you by my side.
                    You are the melody to my heart's song, the poetry in my every thought. Your laughter is a symphony that brightens my darkest days, and your presence is the comfort that defines home.
                    In the tapestry of life, you are the most vibrant thread, weaving joy, understanding, and companionship into every shared moment. Our journey together is a treasure, and I am grateful for each step we take hand in hand.
                    On this Valentine's Day, let's celebrate the beautiful connection we share—the love that grows with every beat of our hearts. Here's to countless more adventures, laughter that echoes through time, and a love that deepens with every passing day.
                    Happy Valentine's Day, my love. You are my forever valentine.
                    With all my love,
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
