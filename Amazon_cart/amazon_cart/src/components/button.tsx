

export const Button = ({title,handleClick}:{title:string,handleClick:any}) => 
{   
    return (
        <div className="w-5/3 h-2/4 p-2">
            <div className="w-full h-full justify-center flex">
                <button onClick={handleClick} className="bg-orange-400 border-orange-600 border-1 font-semibold rounded-sm text-center font-sans w-2/3 h-1/6">{title}</button>
            </div>
        </div>
    )

}