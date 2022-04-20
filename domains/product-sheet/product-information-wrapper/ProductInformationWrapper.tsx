import { Title } from '../../../components/title/Title';

export const ProductInformationWrapper: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <section className="mt-4">
      <Title size="small" className="mb-4">
        {title}
      </Title>
      {children}
    </section>
  );
};
