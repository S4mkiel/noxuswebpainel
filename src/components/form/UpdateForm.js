import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader, CardContent } from '../ui/card';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Alert } from '../ui/alert';

const UpdateForm = () => {
  const [updateKey, setUpdateKey] = useState('');
  const [updatedItems, setUpdatedItems] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updateKey || !updatedItems.trim() || !additionalInfo.trim()) {
      setErrorMessage(true);
      setSuccessMessage(false);
      setTimeout(() => setErrorMessage(false), 3000);
      return;
    }

    setLoading(true);
    const payload = {
      content: '🌟 Uma nova atualização chegou!! ||@everyone||',
      embeds: [
        {
          title: '🚀 Noxus Perfect World - Nova Atualização!',
          description:
            'O servidor **Noxus Perfect World** acaba de receber uma nova atualização! Confira abaixo os detalhes e aproveite as novidades!\n\n',
          color: 0x8b0000,
          timestamp: new Date().toISOString(),
          /*  author: {
            name: 'Noxus Perfect World',
            icon_url: 'https://i.imgur.com/oU7IX1m.png', // Ícone do servidor
          }, */
          thumbnail: {
            url: 'https://i.imgur.com/oU7IX1m.png', // Mini imagem representativa
          },
          image: {
            url: 'https://i.imgur.com/2MZS9II.jpg', // Banner principal da atualização
          },
          fields: [
            {
              name: '🔑 **Versão**',
              value: `\`${updateKey}\``,
              inline: true,
            },
            {
              name: '📅 **Data**',
              value: `<t:${Math.floor(Date.now() / 1000)}:F>`, // Formato dinâmico no Discord
              inline: true,
            },
            {
              name: '🛠️ **O que mudou?**',
              value: updatedItems
                ? updatedItems
                    .split('\n')
                    .map((item) => `- ${item}`)
                    .join('\n')
                : 'Nenhuma mudança listada.',
              inline: false,
            },
            {
              name: 'ℹ️ **Informações Extras**',
              value: additionalInfo || 'Nenhuma informação adicional.',
              inline: false,
            },
          ],
          footer: {
            text: '🛡️ Noxus Perfect World - Evoluindo sempre!',
            icon_url: 'https://i.imgur.com/oU7IX1m.png',
          },
        },
      ],
    };

    try {
      const response = await fetch(
        'https://discord.com/api/webhooks/1356679250236801045/WNnoCtX2nWzIb-n7FQdHsFoW5ELibMHkjXricyBsveeYsN-7nbh6TdS8DIA3lafQ398M',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error('Erro ao enviar para o Discord');

      setSuccessMessage(true);
      setErrorMessage(false);
      setUpdateKey('');
      setUpdatedItems('');
      setAdditionalInfo('');
    } catch {
      setErrorMessage(true);
      setSuccessMessage(false);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-4"
    >
      <Card className="max-w-lg w-full p-6 bg-gray-800 text-white rounded-lg shadow-xl">
        <CardHeader className="text-center text-xl font-bold">📢 Enviar Atualização</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Versão (ex.: Patch 1.2.3)"
              value={updateKey}
              onChange={(e) => setUpdateKey(e.target.value)}
              required
            />
            <Textarea
              placeholder="O que foi atualizado?"
              value={updatedItems}
              onChange={(e) => setUpdatedItems(e.target.value)}
              rows={4}
              required
            />
            <Textarea
              placeholder="Informações Adicionais"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={3}
              required
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : '🚀 Enviar Atualização'}
            </Button>
          </form>
          {successMessage && <Alert message="Atualização enviada com sucesso!" type="success" />}
          {errorMessage && <Alert message="Erro ao enviar! Verifique os campos." type="error" />}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UpdateForm;
