
// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

// Navigation
import { redirect, useRouter } from 'next/navigation';

export default function DisplayMsg({ font, id, msg, senderName, to }) {

    const router = useRouter();

    function limitWords(inputString, wordLimit) {
        // Use a regular expression to split the string into an array of words
        const wordsArray = inputString.split(/\s+/);
      
        // Extract the first 'wordLimit' words using slice
        const limitedWords = wordsArray.slice(0, wordLimit);
      
        // Join the selected words back into a string
        const resultString = limitedWords.join(' ');
      
        return resultString;
      }

    return (
        <>
            <div className="mt-6"
                onClick={ () => router.push(`/message/${ JSON.parse(localStorage.getItem("user_id")) }/${ id }`) }
            >

                <FavoriteIcon 
                style={{ alignSelf: "center", margin: "2px 45%", fontSize: "40px", marginBottom: "-21px" }}
                />

                <div className="bg-gray-500 bg-opacity-50 mx-6 mb-6 py-4 px-6 rounded-md lg:mx-12">
                <p className="text-base dancingscript__font">
                    To: { to }
                </p>

                <p>
                    Message: 
                    <span className={`text-sm shadowsDesign`}>
                    { limitWords(msg, 25) }...
                    </span>
                </p>

                <p className="text-right text-blue-400 caveat cursor-pointer">Link</p>

                </div>

            </div>
        </>
    )
}
