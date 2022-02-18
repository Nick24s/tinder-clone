import SingleMatch from "./SingleMatch";
import styles from './Matches.module.css'

export default function Matches(){


    return (
        <div className={styles.matches}>
            <SingleMatch 
            id={0}
            name="Choko"
            profilImg="https://pbs.twimg.com/profile_images/1445125329681625099/n4Np3MDE_400x400.jpg"
            />
            <SingleMatch
            id={1}
            name="Boko"
            profilImg="https://www.themoviedb.org/t/p/original/mb9i6o3Bj41wL335PSrUKjiHMXq.jpg"
            />
            <SingleMatch
            id={2}
            name="Foko"
            profilImg="https://i.pinimg.com/236x/18/fd/64/18fd644e9cdf81ab785d606584a384fb--an-entrepreneur-inspiring-people.jpg"
            />
            <SingleMatch 
            id={3}
            name="Madison"
            profilImg="https://r5h9d2x3.stackpathcdn.com/wp-content/uploads/2017/07/Madison-Beer-1.jpg"
            />
            <SingleMatch 
            id={4}
            name="Nina"
            profilImg="https://www.nowrunning.com/content/Artist/NinaDobrev/banner.jpg"
            />
        </div>
    )
}