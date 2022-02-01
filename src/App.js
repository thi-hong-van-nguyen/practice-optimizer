import './App.css';
import React, { useState } from 'react';

function App() {
  const [notification, setNotification] = useState(true)

  return (
    <div className='app'>

      {/* HEADER */}
      <div className='header'>
        <div className='header__item header__item--logo'>
          <span className='logo'>logo</span>Practice Optimizer
        </div>
        <div className='header__item header__item--practice'>
          <label>Practice(s)</label>
          <select>
            <option>1: Your Dental Practice</option>
            <option>2: Your Dental Practice</option>
            <option>3: Your Dental Practice</option>
          </select>
        </div>
        <div className='header__item header__item--profile'>
          <div className='profile-heart'><i className='far fa-heart'></i></div>
          <div className='profile-notification'>
            <span className={notification ? 'notification__alert' : ''}></span>
            <i className='far fa-bell'></i>
          </div>
          <div className='profile-link'>
            <i className='far fa-user-circle'></i>
            <span>Your Dental Practice</span>
            <i className='fas fa-caret-down'></i>
          </div>
        </div>
      </div >

      {/* MAIN CONTENTS */}
      <div className='content-wrapper'>
        <div className='menu'>
          <div className='menu__left'>
            <i className='fas fa-bars'></i>
            <h1>Practice Profile</h1>
          </div>
          <div className='menu__right'>
            <div className='menu__right--row1'>
              <i className="fas fa-check"></i>
              <span>Last updated 03/01/2021</span>
              <i className='fas fa-redo-alt'></i>
            </div>
            <div className='menu__right--row2'>
              <span className='range'>
                <label>Time Range In</label>
                <select>
                  <option>Months</option>
                  <option>Months</option>
                  <option>Months</option>
                </select>
              </span>
              <span className='total-months'>
                <label>Total Months</label>
                <select>
                  <option>24</option>
                  <option>24</option>
                  <option>24</option>
                </select>
              </span>
              <span className='starting-date'>
                <label for="start">Start from:</label>
                <input type="date" id="start" name="trip-start" />
              </span>
            </div>
          </div>
        </div>

        <div className='main'>
          <div className='main__left'>
            <div>ccc</div>
          </div>
          <div className='main__right'>
            <div className='main__right--top'>
              <h5>Affinity Dental</h5>
              <div className='address'>234 Steven Creek, San Jose, CA 95182</div>
            </div>
            <div className='main__right--bottom'>
              <div className='row row-1'>
                <div className='col col-left'>
                  <h5>Specialty</h5>
                  <div className='main-font'>General Dentist</div>
                </div>
                <div className='col col-right'>
                  <h5>Operatories</h5>
                  <div className='main-font'>3</div>
                </div>
              </div>
              <div className='row row-2'>
                <div className='col col-left'>
                  <h5>Active Patients</h5>
                  <div className='main-font'>3289</div>
                </div>
                <div className='col col-right'>
                  <h5>New Patients Per Month</h5>
                  <div className='main-font'>50</div>
                </div>
              </div>
              <div className='row row-3'>
                <div className='col col-left'>
                  <h5>Recall Patients</h5>
                  <div className='main-font'>200</div>
                </div>
                <div className='col col-right'>
                  <h5>Patients w/Treatment Plans</h5>
                  <div className='main-font'>3,289</div>
                </div>
              </div>
              <div className='row row-4'>
                <div className='col col-left'>
                  <h5>Dentists</h5>
                  <ul className='dentist-list main-font'>
                    <li>Dr. Ryan Smith</li>
                    <li>Dr. Tim McCarthy</li>
                  </ul>
                </div>
                <div className='col col-center'>
                  <h5>Specialty</h5>
                  <ul className='specialty-list minor-font'>
                    <li>General Dentist</li>
                    <li>Pedodotist</li>
                  </ul>
                </div>
                <div className='col col-right'>
                  <h5>NPI</h5>
                  <ul className='minor-font'>
                    <li>0123456789</li>
                    <li>0123456789</li>
                  </ul>
                </div>
              </div>
              <div className='row row-5'>
                <div className='col col-left'>
                  <h5>Hygienists</h5>
                  <ul className='dentist-list main-font'>
                    <li>Sarah Downstorm</li>
                    <li>Ashley Brown</li>
                  </ul>
                </div>
                <div className='col col-right'>
                  <h5>NPI</h5>
                  <ul className='minor-font'>
                    <li>0123456789</li>
                    <li>0123456789</li>
                  </ul>
                </div>
              </div>
              <div className='row row-6'>
                <div className='col col-left'>
                  <h5>Practtice Management Software</h5>
                  <div className='main-font'>Open Dental v21</div>
                </div>
                <div className='col col-right'>
                  <h5>Financial Software</h5>
                  <div className='main-font'>QuickBooks</div>
                </div>
              </div>
              <div className='row row-7'>
                <div className='col col-left'>
                  <h5>Sikka Master Customer ID</h5>
                  <div className='main-font'>D62493</div>
                </div>
                <div className='col col-right'>
                  <h5>Sikka Practice ID</h5>
                  <div className='main-font'>1-1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
