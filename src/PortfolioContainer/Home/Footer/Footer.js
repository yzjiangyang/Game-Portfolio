import React from "react"
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer-container">
            {/* <div className="footer-parent">
                <img src={require('../../../assets/Home/shape-bg.png').default} alt='no internet connection'/>
            </div> */}
            <div className="weekly-progress">Weekly Progress</div>
            <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">WEEK</th>
                    <th scope="col">PLAN</th>
                    <th scope="col">TIME(DAYS)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Week1</td>
                    <td>Story design. Game Design</td>
                    <td>3-4</td>
                    </tr>
                    <tr>
                    <td>Week2</td>
                    <td>Initial Design Document</td>
                    <td>3</td>
                    </tr>
                    <tr>
                    <td>Week3</td>
                    <td>Completed Initial Design Document</td>
                    <td>3-4</td>
                    </tr>
                    <tr>
                    <td>Week4</td>
                    <td>GDD draft, Add more story details, Learning Unity, C, Github</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week5</td>
                    <td>Create player’s movement and program the player script as wellas his animation</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week6</td>
                    <td>Create projectile’s particle effect and camera follow</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week7</td>
                    <td>Make camera, shadow follow, and health UI with health pickup.Figured out how spriter works</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week8</td>
                    <td>Add a new melee enemy, ranged enemy, and elite enemy.  Finishedwith wave spawner to summon random enemies</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week9</td>
                    <td>Finished the boss, background environment setup, and game UIwith different levels.  Review GDD and game demo for midterm</td>
                    <td>8-10</td>
                    </tr>
                    <tr>
                    <td>Week10</td>
                    <td>Set up the game website. Started designing level 2 for the game. Created a health bar for the boss. Started to develop a new bossfor level 2</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week11</td>
                    <td>Developed save and load functionality. Improved the UI elements.Make the animation smoother</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week12</td>
                    <td>Created enemy spawning for level 2. Continued to work on the new Spider boss for level 2</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week13</td>
                    <td>Improved the game website. Added more sound effects and background music. Started designing level 3 and a new Golem boss for level 3. Created a scrolling map for level 3</td>
                    <td>8-10</td>
                    </tr>
                    <tr>
                    <td>Week14</td>
                    <td>Finished level 3. Tested and polished our game</td>
                    <td>8-10</td>
                    </tr>
                    <tr>
                    <td>Week15</td>
                    <td>Completed the GDD. Finished the game website and trailer. Final presentation</td>
                    <td>7</td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}