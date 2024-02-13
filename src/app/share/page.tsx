
// Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Share (){

    return (
        <div>
            <p className="text-3xl mx-6 my-8">
                Share with { "Olumide Tomson" } on:
            </p>

            <div className='flex'>
                <div>
                    <div className='bg-white rounded-full p-1 mx-6'>
                        <WhatsAppIcon 
                            style={{ fontSize: '48px', color: "green" }}
                        />
                    </div>

                    <p className='text-center'>WhatsApp</p>    
                </div>

                <div>
                    <div className='bg-white rounded-full p-1 mx-6'>
                        <FacebookIcon 
                            style={{ fontSize: '48px', color: "blue" }}
                        />
                    </div>

                    <p className='text-center'>Facebook</p>
                </div>

                <div>
                    <div className='bg-white rounded-full p-1 mx-6'>
                        <ContentCopyIcon 
                            style={{ fontSize: '48px', color: "black" }}
                        />
                    </div>

                    <p className='text-center'>Copy Link</p>   
                </div>
            </div>
        </div>
    )
}
