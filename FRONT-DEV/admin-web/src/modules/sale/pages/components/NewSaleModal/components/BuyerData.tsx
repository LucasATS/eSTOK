import InputForm from '../../../../../../components/FormComponents/InputForm';
import SelectForm from '../../../../../../components/FormComponents/SelectForm';
import { selectOptionsStates } from '../../../../../_shared/constants/SelectOption';

const BuyerData = () => {
  return (
    <div>
      <InputForm name="nomeCartao" type="text" placeholder="Nome no cartão" />
      <div className="flex flex-row gap-3">
        <InputForm name="numeroCartao" type="text" placeholder="Numero no cartão" />
        <InputForm name="dataVencimento" type="date" placeholder="Data de vencimento" />
        <InputForm name="cvv" type="text" placeholder="CVV" />
      </div>
      <InputForm name="nomeCliente" type="name" placeholder="Nome do cliente" />
      <div className="flex flex-row gap-3">
        <InputForm name="email" type="email" placeholder="E-mail" />
        <InputForm name="telefone" type="tel" placeholder="Telefone" />
      </div>
      <div className="flex flex-row gap-3">
        <InputForm name="endereco" type="text" placeholder="Endereço" />
        <InputForm name="bairro" type="text" placeholder="Bairro" />
      </div>
      <div className="flex flex-row gap-3">
        <SelectForm name="estado" placeholder="Estado" options={selectOptionsStates} />
        <InputForm name="cidade" type="text" placeholder="Cidade" />
      </div>
    </div>
  );
};

export default BuyerData;
