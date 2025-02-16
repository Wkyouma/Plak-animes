import React from 'react';
import styles from './Login.module.css';
import Button from '../layout/button';
function Register() {
    return (
        <div className={styles.hero_section}>
            <div className={styles.login_container}>
                <div className={styles.login_box}>
                     <div className={styles.login_header}>
                        <h2>Registre-se</h2>
                        <p> Seja bem-vindo </p>
                     </div>

                     <div className={styles.social_login}>
                    <button className={styles.social_button}>
                        <i className="fab fa-google"></i>
                        Continuar com Google
                    </button>
                    <button className={styles.social_button}>
                        <i className="fab fa-facebook"></i>
                        Continuar com Facebook
                    </button>
                    <button className={styles.social_button}>
                        <i className="fab fa-discord"></i>
                        Continuar com Discord
                    </button>
                </div>
                <div className={styles.divider}>
                    <span>ou</span>
                </div>
                     <form className={styles.login_form}>
                    <div className={styles.form_group}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="senha"
                            required
                        />
                    </div>
                    <div className={styles.form_group}>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="confirmar senha"
                            required
                        />
                    </div>

             

                    <Button type="submit">Entrar</Button>
                </form>
                    

                </div>
            </div>
        </div>
    )}

export default Register;