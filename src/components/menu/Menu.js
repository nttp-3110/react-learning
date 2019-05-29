import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
       <header>
        <div class="header_plane anim"></div>

        <a class="main_menu_btn">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </a>

        <div class="main_menu_block">
            <div class="menu_wrapper">
                <div class="sub_menu anim">
                    <ul>
                        <li><a href="#married">Invitation</a></li>
                        <li><a href="#when_where">When &amp; Where</a></li>
                        <li><a href="#events">Our Events</a></li>
                        <li><a href="#rsvp">RSVP</a></li>
                        <li><a href="#gallery">Our Gallery</a></li>
                    </ul>
                </div>
                <div class="sub_img anim"></div>
            </div>
        </div>
        <div class="header_social">
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
      </div>

        </header>
      </div>
    );
  }
}