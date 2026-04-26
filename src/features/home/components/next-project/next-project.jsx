import styles from './next-project.module.css'
function NextProject(){
    const title = "Site E-commerce | YAHE Doces"
    const projectEnterpriseName = "YAHEDoces.ltda"
    const projectResponsiblePerson = "Gerente de negócios - Agenor"
    const date = "17 de maio - Sexta-feira"
    return (
    <>
        <section className={styles.nextProject}> {/* Seção de próximos projetos */}
            <div className={styles.cardBody}>
                <p id={styles.projectTitle}>
                    {title}
                </p>
                <div className={styles.projectOwner}>
                    <p>
                        <span id={styles.projectEnterpriseName}>
                            {projectEnterpriseName}
                        </span>
                        <span id={styles.projectResponsiblePerson}>| {projectResponsiblePerson}</span>
                    </p>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <p id={styles.projectDate}>{date}</p>
            </div>
        </section>
    </>
    )
}
export default NextProject;