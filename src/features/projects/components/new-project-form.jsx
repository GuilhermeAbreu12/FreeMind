import { useState } from 'react'
import styles from '../styles/projects.module.css'
import Input from '../../../components/ui/input/input'
import Field from '../../../components/ui/field/Field'

const initialFormData = {
    projectName: '',
    projectDescription: '',
    projectType: 'site-institucional',
    projectStatus: 'planejamento',
    clientName: '',
    clientType: 'pessoa-fisica',
    clientEmail: '',
    clientPhone: '',
    projectOwner: '',
    mainFeatures: '',
    excludedScope: '',
    plannedTechnologies: '',
    startDate: '',
    deliveryDate: '',
    milestones: '',
    totalValue: '',
    billingType: 'preco-fechado',
    paymentMethod: 'pix',
    installments: '',
    paymentDates: '',
    paymentStatus: 'pendente',
    contractFile: null,
    contractSignDate: '',
    legalNotes: '',
    communicationChannel: 'whatsapp',
    importantDecisions: '',
    scopeChanges: '',
    hasSupport: 'nao',
    warrantyPeriod: '',
    maintenancePlan: 'nenhum',
    riskLevel: 'baixo',
    clientClarity: 'media',
    recurringProject: 'nao',
    portfolioAllowed: 'sim',
}

function NewProjectForm(){
    const [formData, setFormData] = useState(initialFormData)

    function handleChange(event){
        const { name, value, files, type } = event.target

        setFormData((currentData) => ({
            ...currentData,
            [name]: type === 'file' ? files[0] : value,
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('Novo projeto:', formData)
    }

    return(
        <form onSubmit={handleSubmit} className={styles.projectsForm}>
            <header className={styles.formHeader}>
                <span>Novo projeto</span>
                <h1>Cadastro do projeto</h1>
            </header>

            <section className={styles.formSection}>
                <h2>Identificação</h2>
                <div className={styles.formGrid}>
                    <Input className='inputNewProject' containerClass='containerNewProject' name='projectName' label='Nome do projeto' title='Nome do projeto' value={formData.projectName} onChange={handleChange} />
                    <Field label='Tipo de projeto' name='projectType'>
                        <select name='projectType' value={formData.projectType} onChange={handleChange} required>
                            <option value='site-institucional'>Site institucional</option>
                            <option value='e-commerce'>E-commerce</option>
                            <option value='sistema-web'>Sistema web</option>
                            <option value='app-mobile'>App mobile</option>
                            <option value='landing-page'>Landing page</option>
                            <option value='manutencao'>Manutenção</option>
                            <option value='outro'>Outro</option>
                        </select>
                    </Field>
                    <Field label='Status atual' name='projectStatus'>
                        <select name='projectStatus' value={formData.projectStatus} onChange={handleChange} required>
                            <option value='negociacao'>Em negociação</option>
                            <option value='planejamento'>Planejamento</option>
                            <option value='desenvolvimento'>Em desenvolvimento</option>
                            <option value='aguardando-cliente'>Aguardando cliente</option>
                            <option value='pausado'>Pausado</option>
                            <option value='finalizado'>Finalizado</option>
                        </select>
                    </Field>
                    <Field label='Descrição curta do projeto' name='projectDescription' fullWidth>
                        <textarea name='projectDescription' value={formData.projectDescription} onChange={handleChange} rows='4' placeholder='O que é, para que serve e qual problema resolve.' required />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Cliente</h2>
                <div className={styles.formGrid}>
                    <Input className='inputNewProject' containerClass='containerNewProject' name='clientName' label='Nome do cliente ou empresa' title='Nome do cliente ou empresa' value={formData.clientName} onChange={handleChange} />
                    <Field label='Tipo de cliente' name='clientType'>
                        <select name='clientType' value={formData.clientType} onChange={handleChange} required>
                            <option value='pessoa-fisica'>Pessoa física</option>
                            <option value='pessoa-juridica'>Pessoa jurídica</option>
                        </select>
                    </Field>
                    <Input type='email' className='inputNewProject' containerClass='containerNewProject' name='clientEmail' label='E-mail principal' title='E-mail principal' value={formData.clientEmail} onChange={handleChange} />
                    <Input type='tel' className='inputNewProject' containerClass='containerNewProject' name='clientPhone' label='Telefone / WhatsApp' title='Telefone ou WhatsApp' value={formData.clientPhone} onChange={handleChange} />
                    <Field label='Responsável pelo projeto' name='projectOwner' fullWidth>
                        <input name='projectOwner' value={formData.projectOwner} onChange={handleChange} placeholder='Preencha se o cliente for uma empresa' />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Escopo</h2>
                <div className={styles.formGrid}>
                    <Field label='Funcionalidades principais' name='mainFeatures' fullWidth>
                        <textarea name='mainFeatures' value={formData.mainFeatures} onChange={handleChange} rows='4' placeholder='Liste as entregas principais do projeto.' required />
                    </Field>
                    <Field label='O que não está incluso' name='excludedScope' fullWidth>
                        <textarea name='excludedScope' value={formData.excludedScope} onChange={handleChange} rows='3' placeholder='Ex: hospedagem, copy, suporte contínuo, integrações futuras.' required />
                    </Field>
                    <Field label='Tecnologias previstas' name='plannedTechnologies' fullWidth>
                        <input name='plannedTechnologies' value={formData.plannedTechnologies} onChange={handleChange} placeholder='React, Node, Supabase, Flutter...' />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Prazos</h2>
                <div className={styles.formGrid}>
                    <Input type='date' className='inputNewProject' containerClass='containerNewProject' name='startDate' label='Data de início' title='Data de início' value={formData.startDate} onChange={handleChange} />
                    <Input type='date' className='inputNewProject' containerClass='containerNewProject' name='deliveryDate' label='Data prevista de entrega' title='Data prevista de entrega' value={formData.deliveryDate} onChange={handleChange} />
                    <Field label='Marcos do projeto' name='milestones' fullWidth>
                        <textarea name='milestones' value={formData.milestones} onChange={handleChange} rows='3' placeholder='Protótipo, MVP, revisão, versão final...' />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Financeiro</h2>
                <div className={styles.formGrid}>
                    <Input type='number' className='inputNewProject' containerClass='containerNewProject' name='totalValue' label='Valor total do projeto' title='Valor total do projeto' value={formData.totalValue} onChange={handleChange} />
                    <Field label='Forma de cobrança' name='billingType'>
                        <select name='billingType' value={formData.billingType} onChange={handleChange} required>
                            <option value='preco-fechado'>Preço fechado</option>
                            <option value='por-hora'>Por hora</option>
                            <option value='por-etapa'>Por etapa</option>
                            <option value='por-dia'>Por dia</option>
                        </select>
                    </Field>
                    <Field label='Forma de pagamento' name='paymentMethod'>
                        <select name='paymentMethod' value={formData.paymentMethod} onChange={handleChange} required>
                            <option value='pix'>Pix</option>
                            <option value='boleto'>Boleto</option>
                            <option value='transferencia'>Transferência</option>
                            <option value='cartao'>Cartão</option>
                            <option value='outro'>Outro</option>
                        </select>
                    </Field>
                    <Field label='Parcelamento' name='installments'>
                        <input name='installments' value={formData.installments} onChange={handleChange} placeholder='Ex: 50% + 50%, 3x sem juros...' />
                    </Field>
                    <Field label='Datas de pagamento' name='paymentDates' fullWidth>
                        <textarea name='paymentDates' value={formData.paymentDates} onChange={handleChange} rows='2' placeholder='Sinal, parcelas e vencimentos combinados.' />
                    </Field>
                    <Field label='Status dos pagamentos' name='paymentStatus'>
                        <select name='paymentStatus' value={formData.paymentStatus} onChange={handleChange} required>
                            <option value='pendente'>Pendente</option>
                            <option value='aguardando-sinal'>Aguardando sinal</option>
                            <option value='parcial'>Parcial</option>
                            <option value='pago'>Pago</option>
                            <option value='atrasado'>Atrasado</option>
                        </select>
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Contrato e documentos</h2>
                <div className={styles.formGrid}>
                    <Field label='Contrato anexado' name='contractFile'>
                        <input type='file' name='contractFile' onChange={handleChange} />
                    </Field>
                    <Field label='Data de assinatura' name='contractSignDate'>
                        <input type='date' name='contractSignDate' value={formData.contractSignDate} onChange={handleChange} />
                    </Field>
                    <Field label='Observações legais' name='legalNotes' fullWidth>
                        <textarea name='legalNotes' value={formData.legalNotes} onChange={handleChange} rows='3' placeholder='Direitos autorais, uso do código, NDA...' />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Comunicação</h2>
                <div className={styles.formGrid}>
                    <Field label='Canal principal' name='communicationChannel'>
                        <select name='communicationChannel' value={formData.communicationChannel} onChange={handleChange} required>
                            <option value='whatsapp'>WhatsApp</option>
                            <option value='email'>E-mail</option>
                            <option value='discord'>Discord</option>
                            <option value='slack'>Slack</option>
                            <option value='reuniao'>Reuniões</option>
                        </select>
                    </Field>
                    <Field label='Registro de decisões importantes' name='importantDecisions' fullWidth>
                        <textarea name='importantDecisions' value={formData.importantDecisions} onChange={handleChange} rows='3' placeholder='Principais decisões e aprovações já combinadas.' />
                    </Field>
                    <Field label='Alterações de escopo' name='scopeChanges' fullWidth>
                        <textarea name='scopeChanges' value={formData.scopeChanges} onChange={handleChange} rows='3' placeholder='Data, o que mudou e impacto em prazo ou valor.' />
                    </Field>
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Manutenção e sinais inteligentes</h2>
                <div className={styles.formGrid}>
                    <Field label='Inclui suporte após entrega?' name='hasSupport'>
                        <select name='hasSupport' value={formData.hasSupport} onChange={handleChange}>
                            <option value='nao'>Não</option>
                            <option value='sim'>Sim</option>
                        </select>
                    </Field>
                    <Field label='Período de garantia' name='warrantyPeriod'>
                        <input name='warrantyPeriod' value={formData.warrantyPeriod} onChange={handleChange} placeholder='Ex: 30 dias, 3 meses...' />
                    </Field>
                    <Field label='Plano de manutenção' name='maintenancePlan'>
                        <select name='maintenancePlan' value={formData.maintenancePlan} onChange={handleChange}>
                            <option value='nenhum'>Nenhum</option>
                            <option value='mensal'>Mensal</option>
                            <option value='avulso'>Avulso</option>
                        </select>
                    </Field>
                    <Field label='Risco percebido' name='riskLevel'>
                        <select name='riskLevel' value={formData.riskLevel} onChange={handleChange} required>
                            <option value='baixo'>Baixo</option>
                            <option value='medio'>Médio</option>
                            <option value='alto'>Alto</option>
                        </select>
                    </Field>
                    <Field label='Nível de clareza do cliente' name='clientClarity'>
                        <select name='clientClarity' value={formData.clientClarity} onChange={handleChange} required>
                            <option value='baixa'>Baixa</option>
                            <option value='media'>Média</option>
                            <option value='alta'>Alta</option>
                        </select>
                    </Field>
                    <Field label='Projeto recorrente?' name='recurringProject'>
                        <select name='recurringProject' value={formData.recurringProject} onChange={handleChange}>
                            <option value='nao'>Não</option>
                            <option value='sim'>Sim</option>
                        </select>
                    </Field>
                    <Field label='Pode ir para portfólio?' name='portfolioAllowed'>
                        <select name='portfolioAllowed' value={formData.portfolioAllowed} onChange={handleChange}>
                            <option value='sim'>Sim</option>
                            <option value='nao'>Não</option>
                            <option value='consultar'>Consultar depois</option>
                        </select>
                    </Field>
                </div>
            </section>

            <div className={styles.formActions}>
                <button type='submit'>Criar projeto</button>
            </div>
        </form>
    )
}

export default NewProjectForm
