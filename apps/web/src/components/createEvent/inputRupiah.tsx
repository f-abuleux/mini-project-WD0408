import { useState } from 'react';

const InputRupiah = () => {
    const [value, setValue] = useState('');

    const formatRupiah = (value: string, prefix: string = 'Rp. '): string => {
        let number_string = value.replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix + rupiah;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(formatRupiah(e.target.value));
    };

    return (
        <div>
            <input
                type="text"
                id="rupiah"
                name="rupiah"
                value={value}
                onChange={handleChange}
                placeholder='Rp. 0.xxx.xxx'
                className='w-full py-3 p-3 rounded-md  text-white text-[14px] bg-transparent border border-solid'
            />
        </div>
    );
};

export default InputRupiah;