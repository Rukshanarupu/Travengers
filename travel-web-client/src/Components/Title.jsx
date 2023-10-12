

const Title = ({shortTitle, mainTitle}) => {
    return (
        <div className="text-center mb-5">
            <div className="flex justify-center">
                <h1 className="bg-blue-50 text-myBlue px-5 py-1 md:text-[14px] text-xs mb-2 rounded">{shortTitle}</h1>
            </div>
            <h2
                className="font-bold text-xl md:text-3xl"
                dangerouslySetInnerHTML={{ __html: mainTitle }}
            ></h2>
        </div>
    );
};

export default Title;