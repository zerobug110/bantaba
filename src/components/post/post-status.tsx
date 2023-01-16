import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export const PostStatus = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
          perView: 2,
          spacing: 15,
        },
      })

    return (
        // <div ref={ref}>
        //     <div className="post__status--item">
        //         <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
        //     </div>   
        //     <span className="username">name</span>       
        // </div>         
        
         <div ref={ref} className="keen-slider post__status">
            {[0,1,2,3,4,5,6,7].map(item => (
                
                <div className="post__status--item keen-slider__slide">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                
                </div>
            ))}

        </div>
    )
}