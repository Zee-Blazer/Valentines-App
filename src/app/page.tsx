import Image from "next/image";
import Link from "next/link";

// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Home() {
  return (
    <div>

      <p
        className="text-center text-2xl mt-6 pacifico"
      >Messages</p>
      
      <div className="mt-6">

        <FavoriteIcon 
          style={{ alignSelf: "center", margin: "2px 45%", fontSize: "40px", marginBottom: "-21px" }}
        />

        <div className="bg-gray-500 bg-opacity-50 mx-6 mb-6 py-4 px-6 rounded-md lg:mx-12">
          <p className="text-base dancingscript__font">
            To: { "Olamide Daniella" }
          </p>

          <p className="greatvibes">
            Relationship: { "Sibling" }
          </p>

          <p>
            Message: 
            <span className="text-sm shadowsDesign">
              { "This is to remind you of the awesome relation ship we've had all thr...." }
            </span>
          </p>

          <p className="text-right text-blue-400 caveat cursor-pointer">Link</p>

          <p className="greatvibes">Somehting</p>
        </div>

      </div>

      <div className="absolute -bottom-0 -right-0 mr-12 mb-20 cursor-pointer">
        <AddCircleIcon 
          style={{ fontSize: "54px" }}
        />
      </div>

    </div>
  );
}
