import { Form } from 'react-router-dom';
import Button from '../../../../../components/Button';
import InputForm from '../../../../../components/FormComponents/InputForm';
import TitleCard from '../../../../../components/TitleCard';
import SelectForm from '../../../../../components/FormComponents/SelectForm';

const AddProduto = () => {
  return (
    <div>
      <div>
        <Form>
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-4 rounded-t border-b">
              <TitleCard text="Cadastrar venda" />
            </div>
            <>dados do produto</>
            <div className="flex-col mx-4">
              <SelectForm name="selectProduto" placeholder="Selecione o produto" options={[]} />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="tamanhoProduto" type="text" placeholder="Tamanho do produto" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="quantidadee" type="text" placeholder="Quantidade" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="dataVenda" type="date" placeholder="Data da venda" />
            </div>
            <br></br>
            <div className="flex md:px-4 justify-between py-4 px-1">
              <Button variant="primary" type="button" buttonText="Adicionar mais produto" />
            </div>
          </div>
        </Form>
      </div>

      <br></br>

      <div>
        <Form>
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-start py-1 px-4 rounded-t border-b">
              <>Dados do comprador</>
            </div>
            <div className="flex-col mx-4">
              <InputForm name="nomeCartao" type="text" placeholder="Nome no cartão" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="numeroCartao" type="text" placeholder="Numero no cartão" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="dataVencimento" type="date" placeholder="Data de vencimento" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="cvv" type="text" placeholder="CVV" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="nomeCliente" type="name" placeholder="Nome do cliente" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="email" type="email" placeholder="E-mail" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="telefone" type="tel" placeholder="Telefone" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="endereco" type="text" placeholder="Endereço" />
            </div>
            <div className="flex-col mx-4">
              <InputForm name="bairro" type="text" placeholder="Bairro" />
            </div>
            <select id="estado" name="estado">
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
            <div className="flex-col mx-4">
              <InputForm name="cidade" type="text" placeholder="Cidade" />
            </div>
            <br></br>
            <div className="flex md:px-4 justify-between py-4 px-1">
              <Button variant="primary" type="button" buttonText="Cadastrar" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduto;
