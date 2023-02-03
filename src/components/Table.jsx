import Cookies from "js-cookie";
import React from "react";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../features/api/contactApi";
import { MdDelete } from "react-icons/md";

const Table = () => {
  const token = Cookies.get("token");
  const { data } = useGetContactsQuery({ token });
  const [deleteContact] = useDeleteContactMutation();

  return (
    <div className="overflow-x-auto relative shadow-md my-5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Phone
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.contacts?.data?.map((contact) => (
            <tr
              key={contact?.id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {contact?.name}
              </th>
              <td className="py-4 px-6">{contact?.email}</td>
              <td className="py-4 px-6">{contact?.phone}</td>
              <td className="py-4 px-6 text-right">
                <MdDelete
                  onClick={() => deleteContact({ id: contact?.id, token })}
                  className="cursor-pointer text-lg hover:text-red-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
