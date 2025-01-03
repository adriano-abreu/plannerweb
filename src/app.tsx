import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  function toggleGuests() {
    setIsGuestsInputOpen(!isGuestsInputOpen)
  }

  function toggleModal() {
    setIsGuestsModalOpen(!isGuestsModalOpen)
  }

  const textVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.01,
      },
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  }

  const letterVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  }

  const emails = [
    'jessica.white44@yahoo.com',
    'erik_leffler3@gmail.com',
    'rebekah.conn21@gmail.com',
    'emile.mayer25@yahoo.com',
    'justus_hessel81@hotmail.com',
    'hellen_graham@yahoo.com',
    'kole.schiller27@yahoo.com',
  ]

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-[720px] w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <AnimatePresence>
            {isGuestsInputOpen && (
              <motion.p
                className="text-zinc-300 text-lg text-center overflow-hidden"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {'Convide seus amigos e planeje sua próxima viagem!'
                  .split('')
                  .map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="bg-transparent placeholder-zinc-400 outline-none w-40"
                disabled={isGuestsInputOpen}
              />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestsInputOpen ? (
              <button
                type="submit"
                className="flex items-center px-5 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 font-medium"
                onClick={toggleGuests}
              >
                Alterar local/data
                <Settings2 className="ml-2 size-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center px-5 py-2 bg-lime-300 text-lime-950 rounded-lg hover:bg-lime-400 font-medium"
                onClick={toggleGuests}
              >
                Continuar
                <ArrowRight className="ml-2 size-5" />
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <motion.div
              className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3"
              initial={{ y: '-5vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: 'keyframes' }}
            >
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-transparent text-zinc-400 text-lg outline-none flex-1 text-left"
                  disabled={isGuestsModalOpen}
                >
                  Quem estará na viagem?
                </button>
              </div>

              <div className="w-px h-6 bg-zinc-800"></div>
              <button
                type="submit"
                className="flex items-center px-5 py-2 bg-lime-300 text-lime-950 rounded-lg hover:bg-lime-400 font-medium"
              >
                Confirmar viagem
                <ArrowRight className="ml-2 size-5" />
              </button>
            </motion.div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
          <motion.div
            className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>

                <button type="button" onClick={toggleModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-zinc-400 text-sm">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {emails.map((email, i) => {
                return (
                  <div
                    key={i}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <motion.button type="button" whileTap={{ y: 1 }}>
                      <X className="size-4 text-zinc-400" />
                    </motion.button>
                  </div>
                )
              })}
            </div>

            <div className="bg-zinc-800 w-full h-px" />

            <form className="bg-zinc-950 border border-zinc-800 p-2.5 flex items-center gap-2 rounded-lg">
              <div className="px-2">
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="text"
                  placeholder="Digite o email do convidado."
                  className="flex-1 bg-transparent placeholder-zinc-400 outline-none"
                />
              </div>

              <motion.button
                className="flex items-center px-5 py-2 gap-2 bg-lime-300 text-lime-950 rounded-xl hover:bg-lime-400"
                whileTap={{ y: 1 }}
              >
                Convidar
                <Plus className="size-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
