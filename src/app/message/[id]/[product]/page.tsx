"use client";

import { useEffect, useState } from 'react';

// Navigation
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'

// Firebase
import { auth, database } from '../../../../Firebase/clientApp';
import { ref, push, onValue, get, child } from 'firebase/database';

export default function Product() {

    // const router = useRouter();
    const [data, setData] = useState();

    // const { id, product } = router.query;
    const params = useParams();

    useEffect( () => {
        get(child( ref(database), `Messages/${ params.id }/${ params.product }` ))
        .then( snapshot => {
            if(snapshot.exists()){
                // console.log("exists");
                setData(snapshot.val());
            }
            else{
                console.log("Does not Exist");
            }
        } )
        .catch( err => console.log(err) );
    }, [] )

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
                    <p className={`mb-4 ${ data && data.font } text-3xl`}>Dear { data && data.to },</p>

                    <p className={`${ data && data.font } text-2xl`}>
                    { data && data.msg }
                    </p>

                    <p className={`${ data && data.font } text-3xl text-right mt-6`}>
                        <p>Much Love</p>
                        { data && data.senderName }
                    </p>

                </div>

            </div>

            <p className="text-center py-3 roboto" style={{ color: "lightblue" }}>Send Message</p>

        </>
    )
}
