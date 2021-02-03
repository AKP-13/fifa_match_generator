import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

import "../../../../styles/Register.css";

export class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({
                passwordsNotMatch: "Passwords do not match.",
            });
        } else {
            const newUser = {
                username,
                password,
                email,
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/dashboard" />;
        }

        const { username, email, password, password2 } = this.state;
        return (
            <div className="col-md-9 m-auto">
                <div className="card card-body mt-5 loginRegisterCard">
                    <h2 className="text-center loginRegTitle">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                onChange={this.onChange}
                                value={username}
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                onChange={this.onChange}
                                value={email}
                                placeholder="email@something.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                onChange={this.onChange}
                                value={password}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label id="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                id="confirmPassword"
                                onChange={this.onChange}
                                value={password2}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="registerButton"
                            >
                                Register
                            </button>
                        </div>
                        <p className="loginRegisterText">
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
