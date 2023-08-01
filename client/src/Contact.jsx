/* eslint-disable react/prop-types */
import Avatar from "./Avatar";


export default function Contact({id, username, onClick, selected, online}){
    return (
        <div key={id} onClick={() => onClick(id)} 
            className={"bg-black flex items-center gap-2 cursor-pointer "+(selected ? 'bg-gray-600 mx-2 rounded-md' : '')}>
            {selected  && (
                <div className="w-2 bg-black h-12 rounded-md"></div>
            )}
            <div className="flex gap-2 py-2 pl-5 iems-center">  
                <Avatar online={online} username={username} userId={id}/>
                <span className="text-white">{username}</span>
            </div>
        </div>
    );
}