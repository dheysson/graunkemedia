"use client";
import { Archivo } from 'next/font/google';

const archivo = Archivo({subsets: ['latin'], weight: ['400']});

import {motion} from 'framer-motion';

import { transition1 } from '../transitions/transition1';
import { transition1_d } from '../transitions/transition1_d';
import { transition1_s } from '../transitions/transition1_s';

import { upward } from '../variants/upward';
import { leftward } from '../variants/leftward';
import { item } from '../variants/item';
import { righttoleft } from '../variants/righttoleft';

export default function Home() {
  return (
    <motion.section
    className='section flex flex-col gap-y-24'>
      {/* HERO CONTAINER  */}
      <div className='container mx-auto flex flex-col items-center gap-y-8'>
        {/* hero  */}
        <div className='flex flex-col items-center mt-20'>
          {/* hero lines  */}
          <div className='flex flex-row justify-center items-center gap-x-4'>
            <div className='w-full max-w-[28.5rem] h-full max-h-[7.2rem]'>
              <motion.h1
              variants={upward}
              initial="variantInit"
              animate="variantAnim"
              transition={transition1}
              className='h1'>Eleve-se</motion.h1>
            </div>
            <div className='w-[9.5rem] h-[3.4rem] overflow-hidden relative'>
              <img src="/sla.png" className='w-full h-full object-cover' alt="" loading='lazy'/>
              <motion.div variants={leftward} initial="variantInit" animate="variantAnim" transition={transition1_d} className='absolute bg-[#131313] h-full top-0 bottom-auto left-auto right-0'></motion.div>
            </div>
          </div>
          <div className='w-full max-w-[41.5rem] h-full max-h-[7.25rem'>
            <motion.h1 
            variants={upward}
            initial="variantInit"
            animate="variantAnim"
            transition={transition1_d}
            className='h1'>Para o novo</motion.h1>
          </div>
        </div>
        {/* text  */}
        <div className='mx-[1rem]'>
          <motion.p
          variants={upward}
          initial="variantInit"
          animate="variantAnim"
          transition={transition1}
          className={`${archivo.className} p w-[100%] max-w-[43rem] text-center`} >Eleve seu negócio para outro patamar com a decisão certa, assim como:</motion.p>
        </div>
        {/* logos  */}
        <motion.div variants={upward} initial="variantInit" animate="variantAnim" transition={transition1_s}  className='flex flex-row justify-between h-[80px] mt-8 w-full max-w-[75rem]'>
          <motion.img variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471080e73077f74f023_logoipsum-253%201.svg" className='logos' alt="" />
          <motion.img variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471ec8ca6aa822ed8c2_logoipsum-262%201.svg" className='logos' alt="" />
          <motion.img variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471ec8ca6aa822ed84f_logoipsum-242%201.svg" className='logos' alt="" />
          <motion.img variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471a5344c506d42d2c6_logoipsum-221%201.svg" className='logos' alt="" />
          <motion.img variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471bc00acf4a3afcec5_logoipsum-220%201.svg" className='logos' alt="" />
        </motion.div>
      </div>

      {/* WHO I AM  */}
      <div className='container mx-auto flex flex-col items-center gap-y-16'>
        {/* who we are  */}
        <div className='flex flex-row gap-6'>
          <div className='flex flex-col justify-between'>
            <div className='ml-8'>
              <motion.h2 variants={upward} initial="variantInit" animate="variantAnim" transition={transition1} className='h2'>Quem sou</motion.h2>
              <div className='flex flex-row items-center gap-x-6'>
                <div className='relative'>
                  <img src="/sla.png" className='max-w-[178px]' alt="" />
                  <motion.div variants={leftward} initial="variantInit" animate="variantAnim" transition={transition1_d} className='absolute bg-[#131313] h-full top-0 bottom-auto left-auto right-0'></motion.div>
                </div>
                <motion.h2 variants={upward} initial="variantInit" animate="variantAnim" transition={transition1_d} className='h2'>eu</motion.h2>
              </div>
            </div>
            <div className='flex flex-col bg-[#1e1e1e] max-w-[45rem] rounded-[2.5rem] p-8 justify-end'>
              <h6 className='h6'>3+ anos de experiência</h6>
              <p className={`${archivo.className} p text-[1.125rem]`}>Meu nome é Tiago, tenho 20 anos, desde de 2020 trabalhei como Produtor e Editor de vídeo, e atualmente trabalho como Videomaker profissional.</p>
              <br />
              <h6 className='h6'>100+ projetos</h6>
              <p className={`${archivo.className} p text-[1.125rem]`}>Nullam id diam mattis, faucibus nibh condimentum, semper nunc.</p>
              <br />
              <h6 className='h6'>35 team members</h6>
              <p className={`${archivo.className} p text-[1.125rem]`}>Pellentesque quam nullam id diam mattis, faucibus nibh condimentum, semper nunc.</p>
            </div>

          </div>
          {/* img  */}
          <motion.div variants={righttoleft} initial="variantInit" animate="variantAnim" transition={transition1} className='rounded-[2.5rem] p-[1rem] bg-[#1e1e1e]'>
            <img className='max-h-[32rem] rounded-[2.5rem]' src='videomaker1.jpg'/>
          </motion.div>
        </div>
        <p className={`${archivo.className} p text-[1.5em] text-center`}>Aliquam tincidunt in lectus in dictum. Phasellus sodales hendrerit vehicula. Vivamus imperdiet sed ipsum non placerat. Sed at cursus risus.</p>
        <button className='btn'>Sobre</button>
      </div>

      {/* our services  */}
      <div className='flex flex-col items-center gap-y-16 bg-[#2c2c2c]'>
        <div className='flex flex-col items-center gap-y-16 m-10'>
          <h2 className='h2'>Serviços</h2>
          <div className='max-w-[62rem] grid grid-cols-2 gap-[1.25rem]'>
            <div className='grid_box left_top'>
              <h6 className='h6'>Graphic Design</h6>
              <p className={`${archivo.className} p text-[1.25rem]`}>Nulla sed nulla vestibulum neque pharetra elementum sit amet non nunc. Fusce ut faucibus quam. Suspendisse lectus orci, pharetra in est at, malesuada placerat mauris.</p>
            </div>
            <div className='grid_box right_top'>
              <h6 className='h6'>Web Design & Development</h6>
              <p className={`${archivo.className} p text-[1.25rem]`}>Proin pharetra, felis non placerat scelerisque, lectus risus vulputate augue, eu tincidunt dolor orci at enim. Sed tincidunt enim sapien, eu mollis risus convallis a.</p>
            </div>
            <div className='grid_box left_bottom'>
              <h6 className='h6'>UX/UI Design</h6>
              <p className={`${archivo.className} p text-[1.25rem]`}>Quisque tristique posuere posuere. Mauris vitae sem in est malesuada sollicitudin sit amet non mauris. Vivamus ut placerat arcu.</p>
            </div>
            <div className='grid_box right_bottom'>
              <h6 className='h6'>SEO</h6>
              <p className={`${archivo.className} p text-[1.25rem]`}>Morbi mi purus, convallis in erat et, iaculis rutrum nisl. Sed mi sapien, molestie sit amet turpis a, dapibus tempus mauris.</p>
            </div>
          </div>
        </div>
      </div>

      {/* my recent projects  */}
      <div className='container mx-auto'>
        <div className='container mx-auto w-[100%] max-w-[75rem] h-full relative flex flex-col items-center gap-y-16'>
          <div className='flex flex-col items-center m-10'>
            <h2 className='h2'>Meus projetos</h2>
            {/* hero lines  */}
            <div className='flex flex-row items-center gap-x-8'>
              <h2 className='h2'>recentes</h2>
              <div className='w-[5.75rem] h-[3.5rem] relative'>
                <img src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/647660d93f88ada3d18786a2_proj.webp" alt="" />
                <div className='scaleup'></div>
              </div>
            </div>
          </div>

          {/* projects  */}
          <div className='w-full max-w-[75rem] flex flex-col justify-center'>
            <div className='border-b-2 border-b-[#2c2c2c]'>
              <a className='a project_title text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Lorien Website Design</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/6478e5ef084aab490e915be9_simon-lee-R_6A6CovgIM-unsplash%20(1).jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[#2c2c2c]'>
              <a className='a project_title text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Digital Branding for TriOne</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/647704443beb0b2857bbc8d7_silvio-kundt-pOZGBVICxDc-unsplash-min.jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[#2c2c2c]'>
              <a className='a project_title text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Web Development for QuickRop</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/6477025ee45b8de2e02aab90_and-machines-p9Of0dvgvcs-unsplash.jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
          </div>

          <button className='btn'>Todos projetos</button>
        </div>
      </div>

      {/* Testimonials  */}
      <div className='container mx-auto flex flex-col items-center gap-y-16 '>
        <div className='flex flex-col items-center bg-[#1e1e1e] w-[100%] max-w-[75rem] mx-auto text-center py-10 rounded-[2.5rem] gap-y-16'>
          <h2 className='h2'>Testimonials</h2>

          {/* testimonial img  */}
          <div className='flex flex-row gap-x-16'>
            <img className='testimonial_img active' src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3b8df2631cdcd1d0602_tes1.webp" alt="" />
            <img className='testimonial_img' src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b371794c06c0e6cbf1b2_tes3.webp" alt="" />
            <img className='testimonial_img' src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3c572021272a7580bc3_tes2.webp" alt="" />
          </div>

          {/* testimonial info  */}
          <div>
            <p className={`${archivo.className} p `}>Mauris rutrum ante sapien, eget venenatis est aliquet non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut posuere vel lacus vel vehicula.</p>
            <br />
            <div className='testimonials_author_information'>
              <div className={`${archivo.className} testimonial_author text-[1.2rem]`}>
                Larry Wagner
              </div>
              <div className={`${archivo.className} testimonial_author_job text-[1.1rem] text-[#ffffffcc]`}>
                Digital Project Manager
              </div>
            </div>              
        
          </div>

        </div>
      </div>

      {/* Lets work together  */}
      <div className='flex flex-col items-center relative'>
        <div className='flex flex-col items-center gap-y-16 w-full bg-cover bg-[url("https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477ba105ba0194f79a95af2_dim-gunger-oKN104dsNsY-unsplash%20(1)%202%20(1).jpg")]'>
          <div className='mt-10 bg-[rgba(30,30,30,0.6)] w-full max-w-[70rem] rounded-[2.5rem]'>
            <div className='flex flex-col items-center py-[3rem] px-[0.5rem] gap-y-8'>
              <h2 className='h2'>Vamos trabalhar juntos</h2>
              <p className={`${archivo.className} p text-[1.5rem] text-center`}>Morbi elementum tellus non nunc fringilla, tempor imperdiet ex aliquam. Integer lacinia viverra blandit.</p>
            </div>
          </div>
          
          <button className='btn_light m-10'>Vamos conversar</button>
        </div>

        <div className='scaleup'></div>
      </div>
    </motion.section>
  )
}
