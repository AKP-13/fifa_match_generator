import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import "../../../../styles/Login.css";

export class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
        this.setState({
            username: "",
            password: "",
        });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/dashboard" />;
        }

        const { username, password } = this.state;
        return (
            <div className="col-md-9 m-auto">
                <div className="card card-body mt-5 loginRegisterCard">
                    <h2 className="text-center loginRegTitle">Login</h2>
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="loginButton"
                            >
                                Login
                            </button>
                        </div>
                        <p className="loginRegisterText">
                            Don't have an account?{" "}
                            <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
