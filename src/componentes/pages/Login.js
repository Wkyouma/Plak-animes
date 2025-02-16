import React from 'react';
import styles from './Login.module.css';
import Button from '../layout/button';

function Contact() {
    return (
      <div className={styles.Container }>
      
            <div className={styles.login_box}>
                <div className={styles.login_header}>
                    <h2>Login</h2>
                    <p>Bem-vindo de volta!</p>
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
                            placeholder="Seu email"
                            required
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label>Senha</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Sua senha"
                            required
                        />
                    </div>

                    <a href="" className={styles.forgot_password}>
                        Esqueceu sua senha?
                    </a>

                    <Button type="submit">Entrar</Button>
                </form>

                <div className={styles.switch_form}>
                    <p>
                        Não tem uma conta?
                        <a href="/Register" className={styles.switch_button}>
                            Registre-se
                        </a>
                    </p>
                </div>
            </div>
    
        </div>
    );
}

export default Contact;