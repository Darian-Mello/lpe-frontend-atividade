import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import AcaoContext from './AcaoContext';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaAtividades }
        = useContext(AcaoContext);
    return (
        <Dialogo id="modalEdicao" titulo="Acao" idformulario="formEdicao"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Código" tipo="number"
                name="codigo" value={objeto.codigo}
                handlechange={handleChange}
                requerido={false} readonly={true}
                maximocaracteres={5} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Nome OK" textoinvalido="Informe o nome"
                maximocaracteres={40} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao}
                handlechange={handleChange}
                requerido={true} readonly={false}
                textovalido="Descrição OK" textoinvalido="Informe a descrição"
                maximocaracteres={40} />
            <CampoSelect id="txtAtividade" label="Atividade"
                name="atividade" value={objeto.atividade}
                handlechange={handleChange}
                requerido={true}
                textovalido="Atividade OK"
                textoinvalido="Informe a atividade">
                {
                    listaAtividades.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.nome}
                        </option>
                    ))
                }
            </CampoSelect>
        </Dialogo>
    )
}

export default Form;
