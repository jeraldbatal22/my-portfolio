import React from 'react'
import '../components/Projects.css'
import tribute_page from '../images/tribute.png'
import survey from '../images/survey.PNG'
import landing from '../images/landing.PNG'
import momentum from '../images/momentum.PNG'
import tictactoe from '../images/tictactoe.PNG'
import bank from '../images/bank.PNG'
import slack from '../images/slack.PNG'
import tournament from '../images/tournament.PNG'
import ecommerce from '../images/ecommerce.PNG'
import golearning from '../images/golearning.PNG'
import qoutes from '../images/qoutes.PNG'
import stock from '../images/stock.PNG'
import journal from '../images/journal.PNG'


const Projects = () => {
  return (
    <div className="project_container" id="project_container">
      <div className="projec_card">
        <div className="project_header">
          <h1>Portfolio</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="project_details" id="project_details" >
          <div className="frontend_project">
            <div>
              <h1>FrontEnd Project</h1>
              <div className="project_title">
                <h4>HTML and CSS</h4>
                <div className="image">
                  <div>
                    <img src={tribute_page} alt="" height="240" width="400" />
                    <h4>Tribute Page</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/tribute_page/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/survey_form">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={survey} alt="" height="240" width="400" />
                    <h4>Survey Form</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/survey_form/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/tribute_page">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={landing} alt="" height="240" width="400" />
                    <h4>Landing Page</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/tribute_page/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://jeraldbatal22.github.io/batch9-activities/landing_page/">CLICK HERE.</a> </p>
                    </div>
                  </div>
                </div>
                <h4>Javascript</h4>
                <div className="image">
                  <div>
                    <img src={momentum} alt="" height="240" width="400" />
                    <h4>Momentum App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/momentum_app/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/momentum_app">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={tictactoe} alt="" height="240" width="400" />
                    <h4>Tic Tac Toe</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://jeraldbatal22.github.io/batch9-activities/tic_tac_toe">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/batch9-activities/tree/main/tic_tac_toe">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={bank} alt="" height="240" width="400" />
                    <h4>Banking Budge App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://banking-budget-app.herokuapp.com/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/banking_budget_app">CLICK HERE.</a> </p>
                    </div>
                  </div>
                </div>
                <h4>React Js</h4>
                <div className="image">
                  <div>
                    <img src={slack} alt="" height="240" width="400" />
                    <h4>Slack App Clone</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://slack-app-cl0ne.netlify.app/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/slack-app-clone">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={tournament} alt="" height="240" width="400" />
                    <h4>Tournament Api </h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://t0urnament-app.netlify.app/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/tournament_api">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={ecommerce} alt="" height="240" width="400" />
                    <h4>E Commerce</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://e-commerce-io.netlify.app/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/e-commerce">CLICK HERE.</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="backend_project">
            <div>
              <h1>Backend Project</h1>
              <div className="project_title">
                <h4>Ruby On Rails</h4>
                <div className="image">
                  <div>
                    <img src={qoutes} alt="" height="240" width="400" />
                    <h4>Qoutes App</h4>
                    <div className="project_source">
                      <p>SEE LIVE<a href="https://my-qoutes-app.herokuapp.com/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/qoutes_app">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={journal} alt="" height="240" width="400" />
                    <h4>Journal Task App</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://stock-on-you.herokuapp.com/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/journal_task_app">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={stock} alt="" height="240" width="400" />
                    <h4>Stock On You</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://stock-on-you.herokuapp.com/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/jeraldbatal22/stock-on-you">CLICK HERE.</a> </p>
                    </div>
                  </div>
                  <div>
                    <img src={golearning} alt="" height="240" width="400" />
                    <h4>Go Learning Academy</h4>
                    <div className="project_source">
                      <p>SEE LIVE <a href="https://go-learning-academy-io.herokuapp.com/">CLICK HERE.</a> </p>
                      <p>SOURCE CODE <a href="https://github.com/Stephdajon/rails-base-project">CLICK HERE.</a> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
