"use client";

import {
  ServiceItems as initialServiceItems,
  ServiceItems,
} from "@/Data/service";
import Header from "@/components/header";
import { useState } from "react";
import { toast } from "sonner";

const DashboardPage = () => {
  const [serviceItems, setServiceItems] =
    useState<ServiceItems[]>(initialServiceItems);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [domainName, setDomainName] = useState("");
  const [packageName, setPackageName] = useState("");
  const [expDate, setExpiredDate] = useState("");
  const [status, setStatus] = useState<"Active" | "Pending" | "Expired">(
    "Active",
  );

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();

    if (!domainName.trim() || !packageName.trim() || !expDate.trim()) {
      toast.error("Data belum lengkap!", {
        description: "Harap isi semua bidang terlebih dahulu.",
      });
      return;
    }

    const newService: ServiceItems = {
      id: Date.now(),
      domainName: domainName.trim(),
      packageName: packageName.trim(),
      expDate: expDate.trim(),
      status,
    };

    setServiceItems((prevItems) => [...prevItems, newService]);

    toast.success("Layanan berhasil ditambahkan!", {
      description: `Domain ${domainName.trim()} berhasil ditambahkan.`,
    });
    setDomainName("");
    setPackageName("");
    setExpiredDate("");
    setStatus("Active");
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDomainName("");
    setPackageName("");
    setExpiredDate("");
    setStatus("Active");
  };

  return (
    <Header>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
        {/* Header tabel */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-black font-semibold">Layanan Aktif saya</h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-sm transition-all"
          >
            + Tambah layanan
          </button>
        </div>

        {/* Tabel layanan */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-slate-50 text-xs font-semibold text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Service / Domain</th>
                <th className="px-6 py-4">Package</th>
                <th className="px-6 py-4">Exp Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {serviceItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 duration-300 transition"
                >
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {item.domainName}
                  </td>

                  <td className="px-6 py-4">{item.packageName}</td>

                  <td className="px-6 py-4">{item.expDate}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : item.status === "Pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        toast.info("Fitur Manage", {
                          description: `Pengaturan untuk ${item.domainName} belum tersedia.`,
                        })
                      }
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold cursor-pointer duration-500"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}

              {serviceItems.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-400"
                  >
                    Belum ada layanan. Klik Tambah layanan untuk memulai.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal tambah layanan */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-8 sm:p-10 space-y-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-slate-800">
                Tambah layanan baru
              </h3>

              <form onSubmit={handleAddService} className="space-y-4">
                {/* Nama domain */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Nama Domain
                  </label>

                  <input
                    type="text"
                    placeholder="Contoh: tokosaya.com"
                    value={domainName}
                    onChange={(e) => setDomainName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  />
                </div>

                {/* Nama paket */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Nama paket
                  </label>

                  <input
                    type="text"
                    placeholder="Contoh: Cloud hosting pro"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  />
                </div>

                {/* Tanggal expired */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Tanggal Expired
                  </label>

                  <input
                    type="text"
                    placeholder="Contoh: Bulan Agustus 2027"
                    value={expDate}
                    onChange={(e) => setExpiredDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Status
                  </label>

                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value as "Active" | "Pending" | "Expired",
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>

                {/* Tombol */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-gray-300 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-100 transition"
                  >
                    Batal
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition"
                  >
                    Simpan Layanan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default DashboardPage;
