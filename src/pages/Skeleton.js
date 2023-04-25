import classNames from "classnames";


const Skeleton = ({loop , className})=>{

    const palceHolders = [];

    console.log("run ")

    const classes = classNames(
        "h-10 p-2",
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-traslate-x-full",
        "bg-gradient-to-r",
        "from-blue-200",
        "via-white",
        "to-blue-200",
        "overflow-hidden",
    );

    const outSideClasses = classNames(
        "relative",
        "bg-red-200",
        "mb-3",
        className
    );

    for (let i = 0; i < loop; i++) {
        palceHolders.push(
            <div key={i} className={outSideClasses}>
                <div className={classes} />
            </div>
        );
    }

    // const placeHolders = Array(loop).fill(0).map((_ , index)=>{ return <div key={index} />  })
    return palceHolders;
 
    
}

export default Skeleton