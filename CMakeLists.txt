cmake_minimum_required( VERSION 3.5 )

project( SHUFFLE )

## TODO: Shrink the installation below to just build the required repo

set(THIRD_PARTY "${CMAKE_CURRENT_SOURCE_DIR}/src/third_party")
set(ROOT_DIR "${THIRD_PARTY}/eosio")
set(NODE_MOD_DIR "${CMAKE_CURRENT_SOURCE_DIR}/node_modules")

set(LIBCLANG_DIR "/usr/local/opt/llvm@4/")

message("hello bill 1a")
set(OPENSSL_ROOT_DIR "${NODE_MOD_DIR}/nodegit/vendor/openssl/openssl")
set(Secp256k1_LIBRARY "${NODE_MOD_DIR}/secp256k1/build/Release")
set(Secp256k1_INCLUDE_DIR "${NODE_MOD_DIR}/secp256k1/src/secp256k1-src/include")
# set(WASM_ROOT "${ROOT_DIR}/externals/binaryen/src/tools")
# set(WASM_ROOT "${ROOT_DIR}/externals/binaryen/wasm-jit")
# set(WASM_ROOT "C:/Program Files/LLVM")
set(BOOST_ROOT "C:/Users/Bones/development/billbitt/boost")
# set(BOOST_ROOT "${NODE_MOD_DIR}/boost-lib/cmake")
# set(BOOST_INCLUDEDIR "${ROOT_DIR}/externals/magic_get/include")
message("hello bill 1b")

# moved down below 'set' calls
# add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/src/third_party/eosio")

# Boost dependency

# Include BoostLib module
# file(glob_recurse boostlib_cmake_path "${cmake_current_source_dir}/node_modules" "boostlib.cmake")
# list(get boostlib_cmake_path 0 boostlib_cmake_path)
# get_filename_component(boostlib_cmake_path "${boostlib_cmake_path}" directory)
# set(cmake_module_path "${cmake_module_path};${boostlib_cmake_path}")
# include(boostlib)

# find_package(boost 1.67 required components
#     thread
#     date_time
#     filesystem
#     system
#     program_options
#     signals
#     serialization
#     chrono
#     unit_test_framework
#     context
#     locale
#     iostreams)

# if(boost_found)
#     require_boost_libs(">= 1.58.0" "coroutine")
#     include_directories(${boost_include_dirs})
# endif()

# list(append cmake_module_path "${cmake_current_source_dir}/src/third_party/eosio/libraries/fc/cmakemodules")
# list(append cmake_module_path "${cmake_current_source_dir}/src/third_party/eosio/cmakemodules")

# include( gnuinstalldirs )
# include( versionmacros )
# include( setuptargetmacros )
# include( installdirectorypermissions )
# include( massigning )

# include(wasm)

#include_directories(
#    "/usr/local/wasm/include/clang"
#    "/usr/local/include"
#    "${libclang_dir}/include"
#    "${root_dir}/libraries/fc/include"
#    "${root_dir}/libraries/chainbase/include"
#    "${root_dir}/libraries/chain/include"
#    "${root_dir}/libraries/abi_generator/include"
#    "${root_dir}/libraries/wasm-jit/include"
#    "${root_dir}/libraries/abi_generator/include/eosio/abi_generator"
#    "${root_dir}/contracts/eosiolib"
#)

# include_directories(system
#    ${libclang_include_dir}
#    ${boost_include_dirs}
#    ${cmake_js_inc}
#)

# add_subdirectory("${root_dir}/contracts")

# add_subdirectory("${root_dir}/libraries/abi_generator")
# add_subdirectory("${root_dir}/tools")
