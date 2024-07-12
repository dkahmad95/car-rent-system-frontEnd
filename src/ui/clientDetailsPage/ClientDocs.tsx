interface Props {
  front_id_image: string;
  back_id_image?: string;
}
const ClientDocs = ({ front_id_image, back_id_image }: Props) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col gap-y-8  ">
        <span className=" flex justify-center font-bold text-3xl">
          Documents
        </span>
        <div className="w-[250px] h-[200px] border flex justify-center items-center rounded-xl">
          <img
            src={front_id_image  }
            alt="Front Id"
             className="object-cover rounded-xl w-[250px] h-[200px]"
          />
        </div>
        {back_id_image && (
          <div className=" w-[250px] h-[200px] border flex justify-center items-center rounded-xl">
            <img src={back_id_image} alt="Back Id"  className="object-cover w-[250px] h-[200px] rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDocs;
