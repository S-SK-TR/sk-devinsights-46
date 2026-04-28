import { useState } from 'react';
import { motion } from 'framer-motion';
import useStore from '../store';

const Settings = () => {
  const { userPreferences, updatePreferences } = useStore();
  const [formData, setFormData] = useState(userPreferences);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePreferences(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Ayarlar
      </motion.h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">İlgi Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="aiDevelopment"
                checked={formData.aiDevelopment}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Yapay Zeka Gelişmeleri</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="webDevelopment"
                checked={formData.webDevelopment}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Web Geliştirme</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="mobileDevelopment"
                checked={formData.mobileDevelopment}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Mobil Geliştirme</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="cloudComputing"
                checked={formData.cloudComputing}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Bulut Bilişim</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Kaynaklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="techCrunch"
                checked={formData.techCrunch}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>TechCrunch</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="wired"
                checked={formData.wired}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Wired</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="arstechnica"
                checked={formData.arstechnica}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Ars Technica</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="githubBlog"
                checked={formData.githubBlog}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>GitHub Blog</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Bildirim Ayarları</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>E-posta Bildirimleri</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={formData.pushNotifications}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Push Bildirimleri</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Ayarları Kaydet
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Settings;