const Heading = ({paragraph, mainTitle}) => {
    return (
        <div className="text-center">
            <h2 className="font-bold lg:text-5xl text-xl md:text-3xl mb-2">{mainTitle}</h2>
            <p className="md:text-[14px] text-xs rounded">{paragraph}</p>
        </div>
    );
};

export default Heading;