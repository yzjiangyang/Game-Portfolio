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
                    <th scope="col">PALN</th>
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
                    <td>Change weapons for the player and deal with different projectiles</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week11</td>
                    <td>Build other levels and program randomly generating environment</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week12</td>
                    <td>Finish the randomly generating environment this week</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <td>Week13</td>
                    <td>Make the trailer and website</td>
                    <td>8-10</td>
                    </tr>
                    <tr>
                    <td>Week14</td>
                    <td>Test and polish our game and GDD</td>
                    <td>8-10</td>
                    </tr>
                    <tr>
                    <td>Week15</td>
                    <td>Final Presentation</td>
                    <td>7</td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}